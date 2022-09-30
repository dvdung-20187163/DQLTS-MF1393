<template>
    <div id="modal" class="modal" ref="modal" tabindex="-1"  @keyup.esc="closeForm" @:keyup.ctrl="saveData">
        <div class="form-asset" @click.stop>
            <div class="form-asset__header">
                <div class="form-asset__title">
                    {{titleForm}}
                </div>
                <div class="form-asset__icon icon-close"  @click="closeForm"></div>
            </div> 
            <div class="form-asset__body">
                <div class="double-input--1-2">
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Mã tài sản <span style="color:red">&#8727;</span></div>
                        <input type="text" class="text-field width-100" ref="assetID" 
                        v-model="assetData.fixed_asset_code" 
                        @blur="leaveFocusInput(assetData.fixed_asset_code)"
                        >
                    </div>
                    <div class="box-text-field">
                        <div class="label__text-field">Tên tài sản <span style="color:red">&#8727;</span></div>
                        <input type="text" class="text-field width-100" placeholder="Nhập tên tài sản"
                        v-model="assetData.fixed_asset_name" 
                        @blur="leaveFocusInput(assetData.fixed_asset_name)"
                        >
                    </div>
                </div>
                <div class="double-input--1-2">
                    <!-- combobox -->
                    <div class="box-combobox mr-16">
                        <div class="label__text-field">Mã bộ phận sử dụng <span style="color:red">&#8727;</span>
                        </div>
                        <d-combobox-2 
                        @autoComplete="autoCompleteDepartmentName" 
                        api="https://localhost:7143/api/v1/Departments" 
                        text="Chọn mã bộ phận sử dụng"
                        keyCombobox="department_id"
                        DataComboboxCode="department_code"
                        DataComboboxName="department_name"
                        :ModelInput="assetData.department_code"></d-combobox-2>
                    </div>
                    <div class="box-text-field">
                        <div class="label__text-field">Tên bộ phận sử dụng</div>
                        <input type="text" class="text-field--disable width-100" v-model="assetData.department_name" disabled>
                    </div>
                </div>
                <!-- <div class="combobox width-100 border-none">
                    <input type="text" class="text-field width-100">
                    <div class="combobox__box-selecte form-icon--selecte">
                        <div class="select-icon--up mb-5"></div>
                        <div class="select-icon--down"></div>
                    </div>
                </div> -->
                <div class="double-input--1-2">
                    <!-- combobox -->
                    <div class="box-combobox mr-16">
                        <div class="label__text-field">Mã loại tài sản <span style="color:red">&#8727;</span></div>
                        <d-combobox-2 
                        @autoComplete="autoCompleteAssetCategory" 
                        api="https://localhost:7143/api/v1/AssetCategorys" 
                        text="Chọn mã loại tài sản"
                        keyCombobox="fixed_asset_category_id"
                        DataComboboxCode="fixed_asset_category_code"
                        DataComboboxName="fixed_asset_category_name"
                        :ModelInput="assetData.fixed_asset_category_code"
                       ></d-combobox-2>
                    </div>
                    <div class="box-text-field">
                        <div class="label__text-field">Tên loại tài sản</div>
                        <input type="text" class="text-field--disable width-100" v-model="assetData.fixed_asset_category_name" disabled>
                    </div>
                </div>
                <div class="three-input--1-1-1">
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Số lượng <span style="color:red">&#8727;</span></div>
                        <div class="combobox width-100 border-none">
                            <input type="number" class="text-field width-100 pr-25" min="0" ref="quantity" v-model="assetData.quantity">
                            <div class="combobox__box-selecte form-icon--selecte">
                                <button tabindex="-1" class="btn-select select-icon--up mb-4" @click="this.$refs.quantity.stepUp()"></button>
                                <button tabindex="-1" class="btn-select select-icon--down" @click="this.$refs.quantity.stepDown()"></button>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Nguyên giá <span style="color:red">&#8727;</span></div>
                        <input type="number" class="text-field width-100" v-model="assetData.cost">
                    </div>
                    <div class="box-text-field">
                        <div class="label__text-field">Tỷ lệ hao mòn (%) <span style="color:red">&#8727;</span></div>
                        <div class="combobox width-100 border-none">
                            <input v-model="assetData.depreciation_rate" ref="depreciationRate" @keydown="checkDepreciation" type="number" step="0.01" class="text-field width-100 pr-25">
                            <div class="combobox__box-selecte form-icon--selecte">
                                <button class="btn-select select-icon--up mb-4" @click="this.$refs.depreciationRate.stepUp()"></button>
                                <button class="btn-select select-icon--down" @click="this.$refs.depreciationRate.stepDown()"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="three-input--1-1-1">
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Ngày mua <span style="color:red">&#8727;</span></div>
                        <div class="combobox width-100 border-none">
                            <el-date-picker
                                class="date-picker"
                                v-model="assetData.purchase_date"
                                type="date"
                                format="DD/MM/YYYY"
                                value-format="YYYY-MM-DD"/>
                        </div>
                    </div>
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Ngày bắt đầu sử dụng <span style="color:red">&#8727;</span></div>
                        <div class="combobox width-100 border-none">
                            <el-date-picker
                                class="date-picker"
                                v-model="assetData.purchase_date"
                                type="date"
                                format="DD/MM/YYYY"
                                value-format="YYYY-MM-DD"> 
                        </el-date-picker>
                        </div>  
                    </div>
                    <div class="box-text-field">
                        <div class="label__text-field">Năm theo dõi</div>
                        <input type="number" class="text-field--disable width-100" v-model="assetData.tracked_year">
                    </div>
                </div>
                <div class="three-input--1-1-1 mb-20">
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Số năm sử dụng <span style="color:red">&#8727;</span></div>
                        <div class="combobox width-100 border-none">
                            <input type="number" class="text-field width-100 pr-25" min="0" ref="liftTime" v-model="assetData.life_time">
                            <div class="combobox__box-selecte form-icon--selecte">
                                <button class="btn-select select-icon--up mb-4" @click="this.$refs.liftTime.stepUp()"></button>
                                <button class="btn-select select-icon--down" @click="this.$refs.liftTime.stepDown()"></button>
                            </div>
                        </div>
                    </div>
                    <div class="box-text-field mr-16">
                        <div class="label__text-field">Giá trị hao mòn năm <span style="color:red">&#8727;</span></div>
                        <input type="number" v-model="depreciationYear" class="text-field width-100">
                    </div>
                </div>
            </div>
            <div class="form-asset__footer">
                <button class="btn outline-btn mr-10" @click="showDialog">Hủy</button>
                <button ref="save"  class="btn main-btn" @click="saveData">Lưu</button>
                <button @keyup.tab="focusInputOne" class="btn__tab"></button>
            </div>
        </div>
        
        <!-- Khi dùng component Dialog -->
        <d-dialog 
        v-show="isShowDialogDetailadd"  
        title="Bạn có muốn hủy bỏ khai báo tài sản này" 
        titleBtn1="Không"
        titleBtn3="Hủy bỏ">
        </d-dialog>
    </div>
    
</template>

<script>
import DDialog from '@/components/base/DDialog.vue';
import DCombobox2 from '@/components/base/DCombobox2.vue';
import Enum from '../../../js/enum.js'
import axios from 'axios';
export default {
    name: "WorkspaceJsonAssetDetail",
    data() {
        return {
            // Show dialog ở pop-up thêm tài sản
            isShowDialogDetailadd: false,
            invalidAssetCode: false,
            invalidAssetName: false,
            assetData: {},
            depreciation: '',
            assetCategory: '',
            depreciationYear: 0,
            dateNow: '',
        };
    },
    props: {
        assetSelected: Function,
        titleForm: {
            type: String
        },
        formMode: {
            type: Number,
            default: 1
        }
    },
    created() {
        this.assetData = this.assetSelected;
        this.dateNow = this.printDate()
    },
    mounted() {
        this.$refs.assetID.focus()
    },
    computed: {
    },

    methods: {
        /**
         * Đóng form pop-up
         * Author: DVDUNG (21/09/2022)
         */
        closeForm() {
            this.$emit("closeForm");
        },

        /**
         * Đóng dialog
         * Author: DVDUNG (21/09/2022)
         */
        closeDialog() {
            this.isShowDialogDetailadd = false;
        },

        /**
         * Chọn hủy bỏ (hủy bỏ tài sản) từ dialog ở pop-up thêm mới tài sản
         * --> Đóng pop-up và dialog
         * Author: DVDUNG (21/09/2022)
         */
        destroys() {
            this.isShowDialogDetailadd = false;
            this.$emit("closeForm");
        },
        
        /**
         * Hiện dialog khi bấm nút hủy ở pop-up
         * Author: DVDUNG (21/09/2022)
         */
        showDialog(){
            this.isShowDialogDetailadd = true;
        },

        /**
         * Chọn hủy từ dialog ở pop-up --> ẩn dialog
         * Author: DVDUNG (21/09/2022)
         */
        hideForm(){
            this.isShowDialogDetailadd = false;
        },

        /**
         * Lưu dữ liệu từ form pop-up
         * Author: DVDUNG (21/09/2022)
         */
        saveData() {
            // validate dữ liệu

            // Lưu dữ liệu
            // var method = "POST";
            // var url = "https://localhost:7143/api/v1/Assets";
            this.assetData.create_by="Đặng Văn Dũng"
            this.assetData.create_date= this.dateNow
            this.assetData.modified_by="Đặng Văn Dũng"
            this.assetData.modified_date=this.dateNow

            console.log(this.assetData);
            
            if (this.formMode == 1) {
                axios
                    .post('https://localhost:7143/api/v1/Assets',{body: this.assetData})
                    .then(function () {
                        console.log('thêm mới thành công')
                        this.$emit("closeForm");
                    })
                    .catch(function () {})
            }
            
            if (this.formMode == 2) {
                axios
                    .put(`https://localhost:7143/api/v1/Assets/${this.assetData.fixed_asset_id}`,{body: this.assetData})
                    .then(function () {
                        console.log('thêm mới thành công')
                        this.$emit("closeForm");
                    })
                    .catch(function () {})
            }

            // try {
            //     if(this.formMode == 1) {
            //         method = "GET"
            //         url = url +
            //     }

            //     if(this.formMode == 2) {
            //         method = "PUT";
            //         url = url + `/${this.assetData.fixed_asset_id}`
            //     }

            //     if(this.formMode == 3) {
            //         method = "DELETE";
            //         url = url + `/${this.assetData.fixed_asset_id}`
            //     }

            // fetch(url, { method: method, 
            //     body: JSON.stringify(this.assetData), 
            //     headers: {
            //     "Content-Type": "application/x-www-form-urlencoded",
            //     }, 
            // },
            // )
            // .then(res=>res.json())
            // .then((res) => {
            //     console.log(res.status);
            //     this.$emit("closeForm");
            // })
            // .catch(res => {
            //     console.log(res)
            // })

            // console.log("method", method, "FormMode", this.formMode)
            // } 
            // catch (error) {
            //     console.log(error);
            // }
        },

        /**
         * Kiểm tra xem đã có dữ liệu khi blur ra khỏi input chưa
         * @param {*} data 
         * Author: DVDUNG (21/09/2022)
         */
        leaveFocusInput(data) {
            if (!data) {
                // thêm border màu đỏ
                event.currentTarget.classList.add("errors");
                // Thêm title thông báo lỗi (tạm thời chưa làm vì chưa cần)
            }
            else {
                event.currentTarget.classList.remove("errors");
            }
        },

        // formatDeparate(value) {
        //     if (value == keycode)
        // }
        checkDepreciation(e) {
            if(e.keyCode == Enum.KeyCode.MINUS) {
                e.preventDefault();
            }
            console.log(this.depreciation)
        },

        /**
         * TabIndex không chạy ra khỏi form pop-up
         * Author: DVDUNG (25/09/2022)
         */
        focusInputOne() {
            this.$nextTick(() => {this.$refs.assetID.focus();})
        },
        
        /**
         * Tên bộ phận tự động điền
         * Author: DVDUNG (25/09/2022)
         */
        autoCompleteDepartmentName(id, code, name) {
            this.assetData.department_name = name;
            this.assetData.department_code = code;
            this.assetData.department_id = id;
            console.log(this.assetData.department_name);
        },

        /**
         * Tên loại tài sản tự động điền
         * Author: DVDUNG (25/09/2022)
         */
        autoCompleteAssetCategory(id, code, name) {
            this.assetData.fixed_asset_category_name = name;
            this.assetData.fixed_asset_category_code = code;
            this.assetData.fixed_asset_category_id = id;
            console.log(this.assetData.fixed_asset_category_name);
        },

        /**
         * Lấy ngày hiện tại
         * Author: DVDUNG (29/09/2022)
         */
        printDate: function () {
            return new Date().toLocaleDateString();
          },

    },
    components: {DCombobox2, DDialog},
    
}
</script>


<style scoped>
    @import url('../../../css/base/form.css');
    @import url('../../../css/base/common.css');
    @import url('../../../css/base/combobox.css');
    @import url('../../../css/base/textfield.css');
    @import url('../../../css/base/dialog.css');
    @import url('../../../css/base/datepicker.css');
    
</style>