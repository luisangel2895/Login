/* openDialogLogin(social_network){
    let w = 680;
    let h = 830;
    let left = screen.width / 2 - w / 2;
    let top = screen.height / 2 - h / 2;
    return window.open(
     social_network === 'instagram' ? `http://localhost:3000/api/v1/facebook/auth/${social_network}` : `http://localhost:3000/api/v1/${social_network}/auth`,
      "_blank",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );
  } */
