const mainDiv = document.createElement('div')
document.body.append(mainDiv)
document.body.style.background = '#fbfbfb'
mainDiv.setAttribute('class','userLayout')
mainDiv.setAttribute('id','displayUser')

const url = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'

let startValue
let endValue

const fetchData = async(start,end, btnId) => {
    const resp = await fetch(url)
    const userData = await resp.json()
    console.log(userData)
    // console.log(userData.slice(0,5))

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var nodes = document.getElementById('displayUser')

    nodes.innerHTML = ''

    const showEntries = document.createElement('h4')
    
    showEntries.innerText = `Showing entries from ${start + 1} to ${end}`
    mainDiv.append(showEntries)

    console.log(btnId + 'clicked')

    // if(btnId){
    //     document.getElementById(btnId).classList.add('active')
    // }

    if(start > 0 || end < 100){
            document.getElementById('prevBtn').disabled = false
            document.getElementById('prevBtn').classList.remove('disabled')
            document.getElementById('firstBtn').disabled = false
            document.getElementById('firstBtn').classList.remove('disabled')
            document.getElementById('nextBtn').disabled = false
            document.getElementById('nextBtn').classList.remove('disabled')
            document.getElementById('lastBtn').disabled = false
            document.getElementById('lastBtn').classList.remove('disabled')
        }
    

    return userData.slice(start,end).map((user)=>{

        const userDiv = document.createElement('div')
        
        userDiv.setAttribute('class','userCard')

        const userName = document.createElement('h2')
        const email = document.createElement('h4')

        userDiv.append(userName,email)
        mainDiv.append(userDiv)

        userName.innerText = user.name
        email.innerText = user.email

        startValue = start
        endValue = end
        console.log(startValue,endValue)

        if(start <= 0){
            document.getElementById('prevBtn').disabled = true
            document.getElementById('prevBtn').setAttribute('class','disabled')
            document.getElementById('firstBtn').disabled = true
            document.getElementById('firstBtn').setAttribute('class','disabled')
        }

        if(end >= 100){
            document.getElementById('nextBtn').disabled = true
            document.getElementById('nextBtn').setAttribute('class','disabled')
            document.getElementById('lastBtn').disabled = true
            document.getElementById('lastBtn').setAttribute('class','disabled')
        }

        
    })
}

fetchData(0,10)

const pageMainDiv = document.createElement('div')
document.body.append(pageMainDiv)
pageMainDiv.style.textAlign = 'center'
pageMainDiv.style.marginTop = '30px'
pageMainDiv.style.marginBottom = '50px'
pageMainDiv.setAttribute('class','mainPageDiv')

const paginationDiv = document.createElement('div')
pageMainDiv.append(paginationDiv)
paginationDiv.setAttribute('class','pageDiv')

const page1 = document.createElement('button')
page1.innerText = '1'
page1.setAttribute('id','1')
page1.setAttribute('onclick','fetchData(0,10, this.id)')
page1.setAttribute('class','active')


const page2 = document.createElement('button')
page2.innerText = '2'
page2.setAttribute('id','2')
page2.setAttribute('onclick','fetchData(10,20, this.id)')

const page3 = document.createElement('button')
page3.innerText = '3'
page3.setAttribute('id','3')
page3.setAttribute('onclick','fetchData(20,30, this.id)')

const page4 = document.createElement('button')
page4.innerText = '4'
page4.setAttribute('id','4')
page4.setAttribute('onclick','fetchData(30,40, this.id)')

const page5 = document.createElement('button')
page5.innerText = '5'
page5.setAttribute('id','5')
page5.setAttribute('onclick','fetchData(50,60, this.id)')

const prev = document.createElement('button')
prev.innerText = 'Previous'
prev.setAttribute('onclick','fetchData(startValue - 10, endValue - 10)')
prev.setAttribute('id','prevBtn')

const next = document.createElement('button')
next.innerText = 'Next'
next.setAttribute('onclick','fetchData(startValue + 10, endValue + 10)')
next.setAttribute('id','nextBtn')

const first = document.createElement('button')
first.innerText = 'First'
first.setAttribute('onclick','fetchData(0,10)')
first.setAttribute('id','firstBtn')

const last = document.createElement('button')
last.innerText = 'Last'
last.setAttribute('onclick','fetchData(90, 100)')
last.setAttribute('id','lastBtn')

paginationDiv.append(first,prev,page1,page2,page3,page4,page5,next,last)