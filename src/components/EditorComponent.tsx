// //MarkDown component
// import React, { useState } from "react";
// import { EditorState, ContentState, convertToRaw, convertFromRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// interface MarkdownEditorProps {
//   initialContent?: string;
//   onContentChange: (content: string) => void;
// }

// const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
//   initialContent = "",
//   onContentChange,
// }) => {
//   const [editorState, setEditorState] = useState(() => {
//     if (initialContent) {
//       const contentState = convertFromRaw(JSON.parse(initialContent));
//       return EditorState.createWithContent(contentState);
//     }
//     return EditorState.createEmpty();
//   });

//   const handleEditorStateChange = (newEditorState: EditorState) => {
//     setEditorState(newEditorState);
//     const rawContentState = convertToRaw(newEditorState.getCurrentContent());
//     const content = JSON.stringify(rawContentState);
//     onContentChange(content);
//   };

//   return (
//     <div className="markdown-editor">
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={handleEditorStateChange}
//       />
//     </div>
//   );
// };

// export default MarkdownEditor;