function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SkI0AGM8j/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResult(error, results)
{
    
}