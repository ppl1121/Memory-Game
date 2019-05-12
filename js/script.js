let $cards;
let hasFlippedCard = false;
let lockBoard = false;
let $firstCard= null, $secondCard= null;



function flipCard() {
    if (lockBoard) return;
    if($firstCard!==null && this === $firstCard.get(0)) return;
    $(this).addClass("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        $firstCard = $(this);
        return;
    }
    $secondCard = $(this);
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if ($firstCard.attr("data-framework") === $secondCard.attr("data-framework")){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    $firstCard.off('click');
    $secondCard.off('click');
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        $firstCard.removeClass("flip");
        $secondCard.removeClass("flip");
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [$firstCard, $secondCard] = [null, null];
}

$(document).ready(function() {

    let string = "<div class='memory-card' data-framework='abra'><img class='front-face' src='../img/abra.svg' alt='Abra' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    string = "<div class='memory-card' data-framework='snorlax'><img class='front-face' src='../img/snorlax.svg' alt='Snorlax' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    string = "<div class='memory-card' data-framework='dratini'><img class='front-face' src='../img/dratini.svg' alt='Dratini' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    string = "<div class='memory-card' data-framework='pikachu'><img class='front-face' src='../img/pikachu.svg' alt='Pikachu' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    string = "<div class='memory-card' data-framework='jigglypuff'><img class='front-face' src='../img/jigglypuff.svg' alt='Jigglypuff' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    string = "<div class='memory-card' data-framework='bellsprout'><img class='front-face' src='../img/bellsprout.svg' alt='Bellsprout' /><img class='back-face' src='../img/pokeball.svg' alt='Pokeball' /></div>";
    $(".memory-game").append(string);
    $(".memory-game").append(string);
    $cards = $(".memory-card");
    $cards.each(function() {
        let ramdomPos = Math.floor(Math.random() * 12);
        $(this).css("order",ramdomPos);
    });
    $cards.each(function() {$(this).on("click", flipCard)} );
});




