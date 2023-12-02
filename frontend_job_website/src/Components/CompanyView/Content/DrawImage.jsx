import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DrawImage({ avatarImage, setAvatarImage, coverImage, setCoverImage }) {
  const onDrop = useCallback(
    (acceptedFiles, type) => {
      const file = acceptedFiles[0];
      if (file.type !== "image/png") {
        alert("Please upload a PNG image.");
        return;
      }
      if (type === "avatar") {
        setAvatarImage(URL.createObjectURL(file));
      } else if (type === "coverImage") {
        setCoverImage(URL.createObjectURL(file));
      }
      console.log(acceptedFiles);
    },
    [setAvatarImage, setCoverImage]
  );
  const {
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
    isDragActive: isAvatarDragActive,
  } = useDropzone({
    onDrop: (files) => onDrop(files, "avatar"),
    accept: "image/png",
  });

  const {
    getRootProps: getCoverRootProps,
    getInputProps: getCoverInputProps,
    isDragActive: isCoverDragActive,
  } = useDropzone({
    onDrop: (files) => onDrop(files, "coverImage"),
    accept: "image/png",
  });
  return (
    <>
      {/* Avatar Upload */}
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <label htmlFor="avatar" className="">
          Avatar:
        </label>
        <div {...getAvatarRootProps()} className="w-full">
          <input {...getAvatarInputProps()} id="avatar" />
          <div className="border-dashed border-2 border-slate-500 rounded-lg p-3">
            {avatarImage ? (
              <div className="flex items-center justify-center">
                <img
                  src={avatarImage}
                  alt="Avatar"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            ) : isAvatarDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </div>
      </div>

      {/* Cover Image Upload */}
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <label htmlFor="coverImage" className="">
          Cover Image:
        </label>
        <div {...getCoverRootProps()} className="w-full">
          <input {...getCoverInputProps()} id="coverImage" />
          <div className="border-dashed border-2 border-slate-500 rounded-lg p-3">
            {coverImage ? (
              <img
                src={coverImage}
                alt="Cover Image"
                className="w-full h-72 object-fill rounded-lg"
              />
            ) : isCoverDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>
                Drag 'n' drop some files here, or click to select files ( hight
                : 282px)
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawImage;
