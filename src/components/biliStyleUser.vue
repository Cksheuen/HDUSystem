<template>
    <span class="userBox">
        <div class="imgBox">
            <img
                class="name_picture"
                src="/noface.jpg"
                alt=""
                v-on:mouseover="show1()"
                v-on:mouseleave="hide1()"
            />
        </div>

        <!-- 
             -->
        <userArea
            style="visibility: hidden"
            v-on:mouseover="show2()"
            v-on:mouseleave="hide2()"
        ></userArea>
    </span>
    <!--   -->
</template>
<script setup lang="ts">
import { ifRender } from '@/stores/ifRendered';
import userArea from './userArea.vue';

let area = document.querySelector('.userArea') as HTMLElement;
let check_area = document.querySelector('.imgBox') as HTMLElement;
let move_area = document.querySelector('.name_picture') as HTMLElement;

const iRender = ifRender();


iRender.$subscribe((mutation, state) => {
    console.log(state);
    if (iRender.ifRendered) {
        area = document.querySelector('.userArea') as HTMLElement;
        check_area = document.querySelector('.name_picture') as HTMLElement;
        move_area = document.querySelector('.name_picture') as HTMLElement;
        console.log(area);
        console.log(check_area);
    }
});

let b: boolean = false;
let ed: boolean = false;
let ain: boolean = false;
let bin: boolean = false;

function show1() {
    ain = true;
    b = true;
    console.log('show1');
}

function hide1() {
    setTimeout(function () {
        ain = false;
    }, 50);
    console.log('hide1');
}

function show2() {
    if (ain == true) bin = true;
    console.log('show2');
}

function hide2() {
    setTimeout(function () {
        bin = false;
    }, 50);
    console.log('hide2');
}

setTimeout(function run() {
    if (b == true) {
        area.style.visibility = 'visible';
        area.style.animationName = 'appear';
        area.style.animationDuration = '0.5s';
        area.style.animationFillMode = 'forwards';
        move_area.style.animationName = 'move';
        move_area.style.animationDuration = '0.5s';
        move_area.style.animationFillMode = 'forwards';
        ed = false;
        setTimeout(function () {
            ed = true;
        }, 500);
        b = false;
    } else if (ed == true) {
        if (ain || bin) {
            area.style.visibility = 'visible';
            {
                move_area.style.zIndex = '1000';
                move_area.style.transform = 'translate(22px,20px)';
                move_area.style.width = '82px';
                move_area.style.height = '82px';
                move_area.style.borderRadius = '41px';
            }
        } else {
            area.style.visibility = 'hidden';
            area.style.animationName = '';
            area.style.animationDuration = '';
            area.style.animationFillMode = '';
            {
                move_area.style.zIndex = '1000';
                move_area.style.transform = 'translate(0,0)';
                move_area.style.width = '38px';
                move_area.style.height = '38px';
                move_area.style.borderRadius = '19px';
                move_area.style.animationName = '';
                move_area.style.animationDuration = '';
                move_area.style.animationFillMode = '';
            }
        }
    }
    setTimeout(run, 1);
}, 1);
</script>
<style scoped lang="less">
.userBox {
    display: inline-block;
    font-weight: 500;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 300px;
    padding-right: 50px;
    .imgBox {
        position: absolute;
        width: 38px;
        height: 70px;
        top: 0;
        right: 0%;
        z-index: 100;
        .name_picture {
            position: absolute;
            top: 16px;
            display: inline-block;
            height: 38px;
            width: 38px;
            border-radius: 19.1px;
        }
    }
}
@keyframes appear {
    0% {
        transform: translate(0px, 45px);
    }
    100% {
        transform: translate(0px, 50px);
    }
}
@keyframes move {
    0% {
    }
    100% {
        position: absolute;
        z-index: 1000;
        transform: translate(22px, 20px);
        width: 82px;
        height: 82px;
        border-radius: 41px;
    }
}
</style>
