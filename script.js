const input=document.getElementById("photoInput");
const image=document.getElementById("profileImage");

input.addEventListener("change",function(){
  const file=this.files[0];
  if(!file)return;
  if(!file.type.startsWith("image/")){
    alert("Please choose an image file.");
    return;
  }
  const reader=new FileReader();
  reader.onload=e=>image.src=e.target.result;
  reader.readAsDataURL(file);
});
