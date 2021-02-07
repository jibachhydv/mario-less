PyramidPhoto = (props) => {
  build = () => {
    str = "<h1>";
    for (var i = 0; i < props.height; i++) {
      for (var j = 0; j < props.height; j++) {
        if (i + j >= props.height - 1) {
          str = str + "#";
        } else {
          str = str + "&nbsp;&nbsp;";
        }
      }
      str = str + "<br />";
    }
    return str + "</h1>";
  };

  const pyramid =
    "<h1>&nbsp;&nbsp;&nbsp;&nbsp;#<br /></h1><h1>&nbsp;&nbsp;##<br /></h1><h1>###<br /></h1>";

  var py = build();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: py }}
      className="Pyramidphoto"
    ></div>
  );
};

export default PyramidPhoto;
