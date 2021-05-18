import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import './Header.css'
import point from '../../point.js'
import { updateProfile } from '../../redux/actions/index.js'
import avatar_default from './avatar_default.png'

function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n)

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}

	return new File([u8arr], filename, { type: mime })
}

export default function HeaderForm(props) {
	const dispatch = useDispatch()
	const updateState = useSelector((state) => state.data.updateProfile)
	const image = `${point}${props.userData.avatar}`
	const [open, setOpen] = useState(false)
	const [upImg, setUpImg] = useState()
	const imgRef = useRef(null)
	const previewCanvasRef = useRef(null)
	const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 })
	const [completedCrop, setCompletedCrop] = useState(null)
	const [name, setName] = useState('')
	function generateDownload(canvas, crop, name) {
		if (!crop || !canvas) {
			return
		}
		const canvasItemBase64 = document.querySelector('canvas') || document.createElement('canvas')
		const formData = new FormData()
		formData.append('avatar', dataURLtoFile(canvasItemBase64.toDataURL(), 'canvasImage.jpg'))
		dispatch(updateProfile(formData))
	}
	const onSelectFile = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader()
			reader.addEventListener('load', () => {
				setUpImg(reader.result)
			})
			setName(e.target.files[0].name)
			reader.readAsDataURL(e.target.files[0])
		}
	}
	const onLoad = useCallback((img) => {
		imgRef.current = img
	}, [])
	useEffect(() => {
		if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
			return
		}

		const image = imgRef.current
		const canvas = previewCanvasRef.current
		const crop = completedCrop

		const scaleX = image.naturalWidth / image.width
		const scaleY = image.naturalHeight / image.height
		const ctx = canvas.getContext('2d')
		const pixelRatio = window.devicePixelRatio

		canvas.width = crop.width * pixelRatio
		canvas.height = crop.height * pixelRatio

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
		ctx.imageSmoothingQuality = 'high'

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		)
	}, [completedCrop])
	useEffect(() => {
		if (updateState.success) {
			setOpen(false)
		}
	})
	return (
		<div className='header'>
			{open && (
				<div className='header_modal'>
					<div className='header_modal_block'>
						<div className='header_modal_block_header'>
							<div className='header_modal_block_header_info'>Обрезать фото</div>
							<div onClick={() => setOpen(false)} className='fas fa-times' />
						</div>
						<div className='header_modal_block_body'>
							<div className='header_modal_block_body_form'>
								<input
									name='upload'
									id='upload'
									className='header_modal_block_body_inputFile'
									placeholder='Upload File'
									type='file'
									accept='image/*'
									onChange={onSelectFile}
								/>
								<span className='header_modal_block_body_downloadBtn'>Выбрать файл</span>
							</div>

							<ReactCrop
								src={upImg}
								onImageLoaded={onLoad}
								crop={crop}
								cropShape='round'
								style={{ marginTop: 7, marginBottom: 7 }}
								onChange={(c) => setCrop(c)}
								onComplete={(c) => setCompletedCrop(c)}
							/>
							<div>
								<canvas
									ref={previewCanvasRef}
									style={{
										width: Math.round(completedCrop?.width ?? 0),
										height: Math.round(completedCrop?.height ?? 0),
										display: 'none'
									}}
								/>
							</div>
							{(completedCrop?.width || completedCrop?.height) && (
								<button
									disabled={updateState.loading}
									className='header_modal_block_body_btn'
									onClick={() => generateDownload(previewCanvasRef.current, completedCrop, name)}
								>
									Установить новое фото
								</button>
							)}
						</div>
					</div>
				</div>
			)}
			{typeof props.userData.avatar == 'object' ? (
				<div className='heder_image'>
					<img src={avatar_default} alt='avatar lk norma' />
					<div onClick={() => setOpen(true)} className='header_image_camera'>
						<i className='fas fa-camera' />
					</div>
				</div>
			) : (
				<div className='heder_image'>
					<img src={image} alt='avatar lk norma' />
					<div onClick={() => setOpen(true)} className='header_image_camera'>
						<i className='fas fa-camera'></i>
					</div>
				</div>
			)}
			<div className='header_info'>
				<div className='header_info_fullname'>{`${props.userData.first_name} ${props.userData.last_name}`}</div>

				<Link to={'/main/update-profile'}>Редактировать профиль</Link>
			</div>
		</div>
	)
}
