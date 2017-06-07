/// <reference path="node_modules/@types/jquery/index.d.ts" />

declare var checkEmail : (email:string) => boolean;

$("form").submit(e => {
    const email = $("input[name='email']").val();
    const emailV = checkEmail(email);
    $("input[name='email']").css("background", emailV ? "":"#F78181");
    $("#error-email").toggle(!emailV);
    e.preventDefault();
})