function showData(data){
    let html = '';
    for(let i = 0; i < data.length; i++){
        let keys = Object.keys(data[i]);
        for(let j = 0; j < keys.length; j++){
            html += keys[j]+ ':' + data[i][keys[j]] + '<br>';
        }
    }
    document.getElementById('showData').innerHTML = html;
}

var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3ADwpfnySVRYz8KENHQFcefBC1ejSxuRp8.a6e7Ci4R14QyzpAoMI5D8OxKCdGQ%2FsysT3QnpDj8O0s");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("/api/get/future", requestOptions)
  .then(response => response.text())
  .then(result => {
      console.log(result);
      showData(JSON.parse(result));
    })
  .catch(error => console.log('error', error));