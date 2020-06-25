function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if(Client.validURL(formText) != true){
        alert('Enter correct URL');
    }
    else{
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/NewsURL',{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({text: formText})
        }).then(res => {
            return (res.json())
        })
        .then(function(res) {
            document.getElementById("polarity").innerHTML = res.polarity;                  
            document.getElementById("polarity_confidence").innerHTML = res.polarity_confidence;                   
            document.getElementById("subjectivity").innerHTML = res.subjectivity;                   
            document.getElementById("subjectivity_confidence").innerHTML = res.subjectivity_confidence;
        })
    }}
export { handleSubmit }
