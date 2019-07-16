$(function () {
    var anim_id;

    //saving dom objects to variables

    var container = $("#container");
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 =$('#pole_2');
    var restart_btn = $('#restart_btn');

    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('left'));
    var pole_width = parseInt(pole.width());
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var bird_width = parseInt(bird.width());

    var go_up = false;
    var go_down = false;
    var game_over = false;

    var bleft;
    var pleft;


    var bird_go = 'down';
    var bird_right_left = false;

    var move_right1 = false;
    var move_left1 = false;

    var who_won;


})