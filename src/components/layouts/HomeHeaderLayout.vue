<template>
    <div class="homeHeaderContainer">
        <div class="headerWrapper common">
            <a-row type="flex" justify="space-between">
                <a-col :span="2">
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link">
                            Каталог <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <a href="#">Телевизоры</a>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <a href="#">Ноутбуки</a>
                            </a-menu-item>
                            <a-menu-item key="3">
                                Автотовары 
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </a-col>
                <a-col :span="2">
                    <router-link to="#" class="commonP">О компании</router-link>
                </a-col>
                <a-col :span="4">
                    <router-link to="#" class="commonP">Возврат и обмен товаров</router-link>
                </a-col>
                <a-col :span="3">
                    <router-link to="#" class="commonP">Условия рассрочки</router-link>
                </a-col>
                <a-col :span="2">
                    <router-link to="#" class="commonP">Бонусы и акции</router-link>
                </a-col>
                <a-col :span="2">
                    <router-link to="#" class="commonP">Сервисные центры</router-link>
                </a-col>
                <a-col :span="2">
                    <router-link to="#" class="commonP">Контакты</router-link>
                </a-col>
            </a-row>
        </div>

        <div class="mobileHeader common">
            <a-icon type="menu" class="menu" @click="open = true" />

            <div class="mobileMenu" :class="open ? 'open' : 'close'">
                <div class="menuWrapper">
                    <a-row>
                        <a-icon type="close" class="close" @click="open = false" />
                    </a-row>

                    <a-row type="flex" justify="space-between" class="mobileRow">
                        <a-row>
                            <a-col :span="4">
                                <a-dropdown :trigger="['click']">
                                    <a class="ant-dropdown-link">
                                        Каталог <a-icon type="down" />
                                    </a>
                                    <a-menu slot="overlay">
                                        <a-menu-item key="0">
                                            <a href="#">Телевизоры</a>
                                        </a-menu-item>
                                        <a-menu-item key="1">
                                            <a href="#">Ноутбуки</a>
                                        </a-menu-item>
                                        <a-menu-item key="3">
                                            Автотовары
                                        </a-menu-item>
                                    </a-menu>
                                </a-dropdown>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">О компании</router-link>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">Возврат и обмен товаров</router-link>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">Условия рассрочки</router-link>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">Бонусы и акции</router-link>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">Сервисные центры</router-link>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6">
                                <router-link to="#" class="commonP">Контакты</router-link>
                            </a-col>
                        </a-row>
                    </a-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-header',
    data() {
        return {
            open: false
        }
    }
}
</script>
<style lang="scss">
.homeHeaderContainer {
    width: 100%;
    height: 76px;
    background: #040C0E;
    padding: 12px 0;
    box-sizing: border-box;

    .mobileHeader {
        display: none;
    }

    .headerWrapper {

        a.commonP{
            color: #fff;
        }

        .ant-row-flex {

            .ant-col {

                p.Items {
                    font-size: 1.15rem;
                    color: #fff;
                    margin: 0;
                }

                .ant-dropdown-link {
                    display: flex;
                    align-items: center;
                    column-gap: 4px;
                    color: #fff;
                    font-size: 1.15rem;
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 900px) {
    .homeHeaderContainer {

        .headerWrapper {

            .ant-row-flex {

                .ant-col {

                    p.Items {
                        font-size: 0.85rem !important;
                    }

                    .ant-dropdown-link {
                        font-size: 0.85rem !important;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .homeHeaderContainer {

        .headerWrapper {
            display: none;
        }

        .mobileHeader {
            display: block;
            position: relative;

            .mobileMenu {
                position: fixed;
                left: 0;
                top: 0;
                z-index: 99;
                width: 100%;
                height: 320px;
                background: rgba(33, 33, 33, 0.4);
                transform-origin: left;
                transition: 0.42s linear;

                &.close {
                    transform: scaleX(0);
                }

                &.open {
                    transform: scaleX(1);
                }

                .menuWrapper {
                    width: calc(100% - 48px);
                    height: 100%;
                    background: #fff;
                    padding: 24px;
                    box-sizing: border-box;

                    .anticon {

                        &.close {
                            margin-bottom: 12px;
                        }
                    }


                    .mobileRow {
                        flex-direction: column;

                        .ant-row {
                            height: 24px;
                        }

                        p {
                            font-size: 0.65rem;
                            color: #040C0E;
                        }

                        .ant-dropdown-link {
                            display: flex;
                            align-items: center;
                            color: #040C0E;
                        }
                    }
                }
            }

            .menu {
                color: #fff;
            }
        }
    }
}
</style>