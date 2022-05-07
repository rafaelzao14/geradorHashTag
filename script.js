let getPhrase = ''

function captura(){
 getPhrase = document.getElementById('input').value // pegando valor digitado
 let result = document.getElementById('result').innerHTML = hashTag(getPhrase)
 return result
}




function hashTag(str){

    if(str == '' || str.length > 140){
        return 'Campo vazio, favor inserir a frase!!!'
    }
        let newStr = str.split(' ')
        
        let hashTag = newStr

        if(hashTag.length == 2){
            hashTag = hashTag[0] + hashTag[1]
            console.log(newStr)
        }

        for(let i = 0; i < hashTag.length; i ++){
        hashTag[i] = hashTag[i][0].toUpperCase() + hashTag[i].substring(1)
    }
 
        if(hashTag == '' || hashTag.length > 140){
            return 'Não foi possível gerar a Hashtag'
        }else if (hashTag.length == 1){
            return '#' + hashTag
        }else{
                return '#' + hashTag.join('')
        }
    }




