$(function () {
    // 대상을 변수에 저장
    const $question = $(".faq-wrap > ul > li");
    const $answer = $(".answer-wrap");
    const duration = 300;

    // 질문을 클릭했을 때
    $question.on("click", function () {
        // 🚩 $(this) 로 구별, siblings()

        // 선택한 요소을 기준으로, 다른 요소의 on 클래스 삭제
        $(this).siblings().removeClass("on");

        // $(this).addClass("on");
        // 선택한 요소를 기준으로 on 클래스 토글
        $(this).toggleClass("on");

        // 선택한 요소의 형제, 하위에 있는 답변을 올리고
        $(this).siblings().find($answer).stop().slideUp(duration);

        // $(this).find($answer).slideDown(duration);
        // 선택한 요소의 자손중 답변을 찾아 슬라이드 토글
        $(this).find($answer).stop().slideToggle(duration);
    });
});
