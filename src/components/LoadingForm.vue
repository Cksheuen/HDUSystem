<template>
    <el-form
        :rules="rules"
        ref="form"
        :model="formInline"
        class="demo-form-inline mid"
        :hide-required-asterisk="false"
        label-position="right"
        size="large"
    >
        <el-form-item prop="user" class="inputBox">
            <el-input
                v-model="formInline.user"
                :placeholder="props.input1[parseInt(props.method)]"
                label-width="100%"
                clearable
            />
        </el-form-item>
        <el-form-item prop="password" class="inputBox">
            <el-input
                v-model="formInline.password"
                :placeholder="props.input2[parseInt(props.method)]"
                type="password"
            ></el-input>
            <el-button class="sendC" type="primary" @click="sendCode" v-show="ifShow">
                发送验证码
            </el-button>
        </el-form-item>
        <el-form-item>
            <el-button class="but" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { type FormItemRule, type FormInstance, ElMessage } from 'element-plus';

const router = useRouter();

const props = defineProps(['input1', 'input2', 'method', 'ifShow']);

type Form = {
    user: string;
    password: string;
};

type Rules = {
    [K in keyof Form]?: Array<FormItemRule>;
};

const form = ref<FormInstance>();

const formInline = reactive<Form>({
    user: '',
    password: '',
});

let rules = reactive<Rules>({
    user: [
        {
            required: true,
            message: '请确认输入内容',
            trigger: 'change',
        },
    ],
    password: [
        {
            required: true,
            message: '请确认输入内容',
            trigger: 'change',
        },
    ],
});

const onSubmit = () => {
    form.value?.validate(validate => {
        console.log(validate);
        if (validate) {
            router.push('/');
            localStorage.setItem('token', '1');
        } else {
            ElMessage.error('请输入完整');
        }
    });
};

const sendCode = () => {
    console.log('发送验证码');
};
</script>
<style scoped>
.mid {
    margin: auto;
}
.inputBox {
    margin-left: calc(50% - 150px);
    margin-bottom: 15px;
}
.but {
    width: 100px;
    margin: auto;
}
.sendC {
    position: absolute;
    top: 0%;
    right: 9.2px;
    z-index: 2;
}
.demo-form-inline .el-input {
    --el-input-width: 300px;
}
</style>