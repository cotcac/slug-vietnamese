module.exports = function(str){
   str = str.toLowerCase();
   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
   str = str.replace(/d|đ/g, "d");
   str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g, "e");
   str = str.replace(/í|ì|ỉ|ĩ|ị/g, "i");
   str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g, "o");
   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
   str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/g, "y");
   return slug(str);
}
function slug(str,spaceRepl="-"){
  // Replace "&" char with "va"
  str = str.replace(/&/g, "va");
  // Delete any chars but letters, numbers, spaces and _, -
  str = str.replace(/[^A-Za-z0-9\s]/g,"")
  // Replace spaces with replacement
  str = str.replace(/\s+/g,spaceRepl);
  return str;
}
