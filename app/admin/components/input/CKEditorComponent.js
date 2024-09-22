'use client';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const CKEditorComponent = ({ value, onChange }) => {

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value} 
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data); 
        }}
        config={{
          toolbar: ["heading", "bold", "italic", "link"],
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
