<template>
    <BApp>
        <!--
Source - https://stackoverflow.com/a/44130105
Posted by Andreas Bergström, modified by community. See post 'Timeline' for change history
Retrieved 2026-01-03, License - CC BY-SA 4.0
-->


        <div class="d-flex flex-column justify-content-center align-items-center dvh-100">
            <header class="border-bottom">
                <div class="container text-center py-3">
                    <a href="/" class="text-dark text-decoration-none">
                        <span>Пополнить подорожник</span>
                    </a>
                </div>
            </header>
            <a href="#" class="btn mt-5" role="button" @click.prevent="copyToClipboard"
                :data-text="'96433078361620599568105003'"><i class="bi bi-copy me-2"></i>Гошин</a>
            <a href="#" class="btn mt-5" role="button" @click.prevent="copyToClipboard"
                :data-text="'96433078361289155632263724'"><i class="bi bi-copy me-2"></i>Ксюшенькин</a>
            <a href="http://sberbank.com/sms/shpa/?cs=668341289737&psh=f&did=1760948078147000853" class="btn mt-5"
                role="button"><i class="bi bi-box-arrow-up-right"></i> в Сбер</a>
        </div>

        <div class="toast-container position-fixed top-0 end-0 p-3">
            <BToast v-model="showToast" :title="toastTitle">
                {{ toastMessage }}
            </BToast>
        </div>
    </BApp>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BApp, BToast } from 'bootstrap-vue-next';

const showToast = ref(false)
const toastTitle = ref('')
const toastMessage = ref('')

function copyToClipboard(event: MouseEvent): void {
    const button = event.currentTarget as HTMLButtonElement;
    const text = button.getAttribute('data-text');

    if (!text) {
        toastTitle.value = 'Error'
        toastMessage.value = 'No text to copy'
        showToast.value = true
        return
    };

    navigator.clipboard.writeText(text)
        .then(() => {
            toastTitle.value = 'Success. Copied';
            toastMessage.value = text;
            showToast.value = true;
        })
        .catch((err: Error) => {
            toastTitle.value = 'Error'
            toastMessage.value = 'Failed to copy'
            console.error('Failed to copy:', err)
            showToast.value = true
        })
}
</script>

<style>
.dvh-100 {
    height: 100dvh;
}
</style>