import React from 'react'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const SunEditorWYSIWYG = props => (
  <SunEditor
    onChange={props.onChange}
    value={props.value}
    name={props.name}
    setOptions={{
      buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' /** ,'math' */],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
      ],
    }}
  />
)

export default SunEditorWYSIWYG
