<template>
    <BApp>
        <div class="projects dvh-100 d-flex flex-column justify-content-center align-items-center">
            <div class="project d-flex flex-column justify-content-center align-items-center">
                <header class="border-bottom">
                    <div class="container text-center py-3">
                        <a href="#" class="btn text-dark text-decoration-none px-2 mx-1"
                            @click.prevent="resetIsCopied(currentProject.items)">
                            <i class="bi bi-arrow-clockwise "></i>
                        </a>
                        <span>{{ currentProject.name[currentProject.locale] }}</span>
                        <input type="checkbox" class="btn-check" id="settings" v-model="currentProject.settingsShown"
                            autocomplete="off">
                        <label class="btn px-2 mx-1" for="settings">
                            <i class="bi bi-gear"></i>
                        </label>
                    </div>
                </header>
                <BCollapse v-model="currentProject.settingsShown">
                    <!--div class="container text-center pt-3 form-check form-switch">
                        <input type="checkbox" name="show-copy-text" id="show-copy-text" class="form-check-input" >
                        <label for="show-copy-text" class="form-check-label">show text to copy</label>
                    </div-->
		<BFormRadioGroup
	             v-model="currentProject.locale"
                     :options="currentProject.localeOptions"
		      buttons
		      button-variant="outline-primary"
		      class="pt-3"></BFormRadioGroup>
                </BCollapse>
                <template
                    v-for="projectItem in currentProject.items.sort((a, b) => a.order[currentProject.locale] - b.order[currentProject.locale])">
                    <a v-if="projectItem.copy" href="#" class="btn mt-5" role="button"
                        @click.prevent="() => copyToClipboard(projectItem, currentProject.locale)"
                        :data-text="projectItem.copyText[currentProject.locale]"><i
                            :class="['bi', !projectItem.isCopied ? 'bi-copy' : 'bi-check-square', 'pe-1']"></i>{{
                                projectItem.displayText[currentProject.locale] }}</a>
                    <a v-if="projectItem.redirect && isTauri()" href="#" class="btn mt-5" role="button"
                        @click.prevent="openUrl(projectItem.copyText[currentProject.locale])"><i
                            class="bi bi-box-arrow-up-right pe-1"></i>{{ projectItem.displayText[currentProject.locale]
                            }}</a>
                    <a v-if="projectItem.redirect && !isTauri()" :href="projectItem.copyText[currentProject.locale]"
                        class="btn mt-5" role="button"><i class="bi bi-box-arrow-up-right pe-1"></i>{{
                            projectItem.displayText[currentProject.locale]
                        }}</a>
                </template>
            </div>
        </div>
    </BApp>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { BApp, BCollapse } from 'bootstrap-vue-next';
import { isTauri } from '@tauri-apps/api/core';
import { openUrl } from '@tauri-apps/plugin-opener';

import { BFormRadioGroup } from 'bootstrap-vue-next';

type Localized<T> = Record<string, T>;
interface LocaleOption {
    text: string;
    value: string;
}
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
    settingsShown?: boolean;
    copyTextShown?: boolean;
    locale: string;
    localeOptions: LocaleOption[];
}

const currentProject: Ref<Project> = ref({
    name: {
        'ru': 'Пополнить подорожник',
        'en': 'Top up podorzhnik',
    },
    locale: 'ru',
    localeOptions: [
        {
            text: 'ru',
            value: 'ru'
        },
        {
            text: 'en',
            value: 'en'
        }
    ],
    items: [
        {
            order: {
                'ru': 1,
                'en': 1
            },
            displayText: {
                'ru': 'Гошин',
                'en': 'Goshin'
            },
            copyText: {
                'ru': '96433078361620599568105003',
                'en': '96433078361620599568105003'
            },
            copy: true,
            redirect: false
        },
        {
            order: {
                'ru': 2,
                'en': 2
            },
            displayText: {
                'ru': 'Ксюшенькин',
                'en': 'Ksushenkin'
            },
            copyText: {
                'ru': '96433078361289155632263724',
                'en': '96433078361289155632263724'
            },
            copy: true,
            redirect: false
        },
        {
            order: {
                'ru': 3,
                'en': 3
            },
            displayText: {
                'ru': 'В Сбер',
                'en': 'Go to Sber'
            },
            copyText: {
                'ru': 'http://sberbank.com/sms/shpa/?cs=668341289737&psh=f&did=1760948078147000853',
                'en': 'http://sberbank.com/sms/shpa/?cs=668341289737&psh=f&did=1760948078147000853'
            },
            copy: false,
            redirect: true
        }
    ]
});

function copyToClipboard(item: ProjectItem, locale: string): void {
    navigator.clipboard.writeText(item.copyText[locale]);

    item.isCopied = true;
}

function resetIsCopied(projectItems: ProjectItem[]): void {
    projectItems.forEach(item => {
        item.isCopied = false;
    });
}

</script>

<style>
.dvh-100 {
    height: 100dvh;
}
</style>
