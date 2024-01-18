import { Editor } from '@tinymce/tinymce-react'
import './DataFields.css'

function FlexField(_props) {
    return (
        <>

            <div className="group-input">
                <label htmlFor={_props.label}>
                    {_props.isRequired === "true" && <div className="required"></div>}
                    {_props.label}
                </label>
                <div className='instruction'>{_props.instruction}</div>
                <Editor
                    apiKey='nlsiabbt295w89cjmcocv6qjdg3k7ozef0q9meowv2nkwyd3'
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                    initialValue=""
                />
            </div>

        </>
    )
}

export default FlexField
