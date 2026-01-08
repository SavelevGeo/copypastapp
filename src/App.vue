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
                        <span>{{ currentProject.name[currentLocale] }}</span>
                    </a>
                </div>
            </header>
            <template v-for="projectItem in currentProject.items">
                <a v-if="projectItem.copy" href="#" class="btn mt-5" role="button"
                    @click.prevent="() => copyToClipboard(projectItem, currentLocale)"
                    :data-text="projectItem.copyText[currentLocale]"><i
                        :class="['bi', !projectItem.isCopied ? 'bi-copy' : 'bi-check-square', 'pe-1']"></i>{{
                            projectItem.displayText[currentLocale]}}</a>
                <a v-if="projectItem.redirect" :href="projectItem.copyText[currentLocale]" class="btn mt-5"
                    role="button"><i class="bi bi-box-arrow-up-right"></i> {{ projectItem.displayText[currentLocale]
                    }}</a>
            </template>
        </div>
    </BApp>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { BApp } from 'bootstrap-vue-next';

type Localized<T> = Record<string, T>;
interface ProjectItem {
    order: Localized<number>;
    displayText: Localized<string>;
    copyText: Localized<string>;
    copy: boolean;
    redirect: boolean;
    isCopied?: boolean;
}
interface Project {
    name: Localized<string>;
    items: ProjectItem[];
}

const currentLocale: Ref<string> = ref('ru');
const currentProject: Ref<Project> = ref({
    name: {
        'ru': 'Пополнить подорожник',
    },
    items: [
        {
            order: {
                'ru': 1
            },
            displayText: {
                'ru': 'Гошин',
            },
            copyText: {
                'ru': '96433078361620599568105003'
            },
            copy: true,
            redirect: false
        },
        {
            order: {
                'ru': 2
            },
            displayText: {
                'ru': 'Ксюшенькин',
            },
            copyText: {
                'ru': '96433078361289155632263724'
            },
            copy: true,
            redirect: false
        },
        {
            order: {
                'ru': 3
            },
            displayText: {
                'ru': 'В Сбер',
            },
            copyText: {
                'ru': 'http://sberbank.com/sms/shpa/?cs=668341289737&psh=f&did=1760948078147000853'
            },
            copy: false,
            redirect: true
        }
    ]
});

function copyToClipboard(item: ProjectItem, currentLocale: string): void {
    navigator.clipboard.writeText(item.copyText[currentLocale]);

    item.isCopied = true;
}

</script>

<style>
.dvh-100 {
    height: 100dvh;
}
</style>
