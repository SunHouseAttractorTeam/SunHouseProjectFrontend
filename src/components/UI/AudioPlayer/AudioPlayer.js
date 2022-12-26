import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { apiUrl } from '../../../config'

const AudioPlayer = ({ audio }) => (
  <ReactAudioPlayer src={`${apiUrl}/uploads/${audio}`} controls style={{ marginBottom: '20px' }} />
)

export default AudioPlayer
