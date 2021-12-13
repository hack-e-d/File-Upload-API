function uploadFile() {
    var file = document.getElementById('files').files[0];
    console.log(file);
    var data = new FormData()
    data.append('file', file)
    data.append('user', 'hubot')
    console.log(data.get('file'));
    
    fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
            // Content-Type may need to be completely **omitted**
            // or you may need something
            "Content-Type": "You will perhaps need to define a content-type here"
        },
        body: data // This is your file object
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        success => console.log(success) // Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );
};
