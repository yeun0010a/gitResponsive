let frame = "section"; 
let box = "article"; 
let speed = '0.5s'; 
let activeClass = "on"; 
let btn = document.querySelectorAll("main ul li"); 
let grid;  // grid 선언 (다른 곳에서 사용할 변수)
// 플러그인의 정보값이 담길 변수를 전역으로 설정! 

window.addEventListener("load", ()=>{  
    init(); // 화면 초기화 함수 호출
    filter(btn);  // 정렬 버튼 기능 함수 호출

});

// 초기화함수
function init(){
    grid = new Isotope(frame, {
        // 각 아이템을 선택할 셀렉터 
        itemSelector: box,
        // 그리드의 각 열의 너비를 결정하는 열 너비 셀렉터 숫자
        columnWidth: box,
        // 아이템이 정렬될 때의 전환(애니메이션 지속시간)
        transitionDuration: speed,
    });
    }
      
// 정렬 버튼 기능 함수 정의 
function filter(arr) {
    // 주어진 버튼 그룹의 각 요소 반복
    for (let el of arr) {
        // 반복할 코드
        el.addEventListener("click", e => {
            e.preventDefault();
            //   e.preventDefault(); - > 링크차단메서드 
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            // Isotope 그리드 정렬 및 필터링 적용
            grid.arrange({
                filter: sort// 정렬 옵션값
                // .arrange -> 그리드정렬 필터링시 사용되는 Isotope의 메서드
            });
            // 버튼 모든 그룹에 activeClass 제거
            for (let el of arr) {
                el.classList.remove(activeClass);
            }
            // 클릭된 버튼에 activeClass 클래스 추가
            e.currentTarget.classList.add(activeClass);
        });
    }
}