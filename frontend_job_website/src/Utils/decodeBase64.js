export default function decodeBase64AndDisplayImage(base64Data) {
  const imageBytes = atob(base64Data); //decode

  //convert byte array to unit8Array
  const unit8Array = new Uint8Array(imageBytes.length);
  for (let i = 0; i < imageBytes.length; i++) {
    unit8Array[i] = imageBytes.charCodeAt(i);
  }

  //create aB Blob from the Unit8Array
  const blob = new Blob([unit8Array], { type: "image/jpg" });

  //Generate the URL for the Blob
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
}
