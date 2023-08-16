<template>
    <el-upload
        ref="upload"
        class="upload-demo"
        action=""
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false"
        :before-upload="beforeAvatarUpload"
    >
        <template #trigger>
            <el-button type="primary">select file</el-button>
        </template>
        <el-button class="ml-3" type="success" @click="submitUpload">upload to server</el-button>
        <template #tip>
            <div class="el-upload__tip text-red">
                limit 1 file, new file will cover the old file
            </div>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { genFileId, ElMessage } from 'element-plus';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';

const upload = ref<UploadInstance>();

const handleExceed: UploadProps['onExceed'] = files => {
    upload.value!.clearFiles();
    const file = files[0] as UploadRawFile;
    file.uid = genFileId();
    console.log(file);
    upload.value!.handleStart(file);
};

const submitUpload = () => {
    //upload.value!.submit();
    console.log(upload);
};

const beforeAvatarUpload: UploadProps['beforeUpload'] = rawFile => {
    /* if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!');
        return false;
    } else  */ if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!');
        return false;
    }
    return true;
};
</script>
<style scoped lang="less">
.upload-demo {
    position: absolute;
    top: 200px;
}
</style>
