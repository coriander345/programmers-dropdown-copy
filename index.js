const uls = document.getElementsByTagName("ul")
const options = document.getElementsByClassName("option")

const Levels=["Level1","Level2","Level3","Level4","Level5"]
const isSolved=["푼 문제", "안 푼 문제"]
const proLangs = ["C","C++","C#","Go","Java","JavaScript","Kotlin","Python2", "Python3", "Ruby", "Scala", "Swift", "MySQL", "Oracle"]
const companys = ["전체", "카카오"]
const collections=["전체","2022 KAKAO BLIND RECRUITMENT",
"2021 Dev-Matching: 웹 백엔드 개발자(상반기)",
"2021 KAKAO BLIND RECRUITMENT",
"2018 KAKAO BLIND RECRUITMENT",
"2021 카카오 채용연계형 인턴십",
"2020 카카오 인턴십",
"2019 카카오 개발자 겨울 인턴십",
"2017 카카오코드 예선",
"2017 카카오코드 본선",
"월간 코드 챌린지 시즌3",
 "월간 코드 챌린지 시즌2",
 "월간 코드 챌린지 시즌1",
 "Summer/Winter Coding(2019)",
 "Summer/Winter Coding(~2018)",
 "찾아라 프로그래밍 마에스터",
 "2017 팁스타운",
 "위클리 챌린지",]
const ulLists = [Levels,isSolved,proLangs,companys,collections]

 ulLists.map((list,i)=>{
  for(let item of list){
    const li = document.createElement("li")
   const input = document.createElement("input")
   input.type = "checkbox"
   li.append(input)
   li.innerText=item
   uls[i].append(li)
  }
 })
 
 for(let index in uls){
  uls[index].hidden=true
}

// functions
function handleDropdown(i){
  uls[i].hidden=!uls[i].hidden
  
  console.log(i)
}


 /// addEventListener
 for(let i in options){
   console.log(options[i])
   options.item(i).addEventListener("click", ()=>handleDropdown(i))
 }
 