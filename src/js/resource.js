export default {
    ErrorValidate: {
        EmployeeCodeNotEmpty: {
            VI: "Mã tài sản không được phép để trống",
            EN: "Employee Code is not empty"
        },
        FullNameNotEmpty: {
            VI: "Tên tài sản không được phép để trống",
            EN: "Full name is not empty"
        },
        EmailNotEmpty: {
            VI: "Email không được phép để trống",
            EN: "Email is not empty"
        },
        PhoneNumberNotEmpty: {
            VI: "Phone number không được phép để trống",
            EN: "Phone number is not empty"
        }
    },
    TitleFormPopup: {
        FormAddAsset: {
            VI: "Thêm mới tài sản",
            EN: "Add new asset"
        },
        FormUpdateAsset: {
            VI: "Chỉnh sửa tài sản",
            EN: "Edit assets"
        },
        FormInfoAsset: {
            VI: "Thông tin tài sản",
            EN: "Asset information"
        },
        FormDuplicateAsset: {
            VI: "Nhân bản tài sản",
            EN: "Duplicate asset"
        }
    },
    TitleDialog: {
        DeleteNoData: {
            VI: "Bạn chưa chọn tài sản để xóa",
            EN: "You have not selected an asset to delete"
        },
        DeleteOneAsset: {
            VI: "Bạn có muốn xóa tài sản",
            EN: "Do you want to delete assets?"
        },
        DeleteMultiple: {
            VI: "tài sản đã được chọn. Bạn có muốn xóa các tài sản này khỏi danh sách?",
            EN: "asset has been selected. Do you want to remove these assets from the list?"
        }
    },
    API: {
        Asset: {
            GET: {
                AllAsset: "https://localhost:7143/api/v1/Assets",
                AssetById: "https://localhost:7143/api/v1/Assets/",
                Department: "",
                FilterAsset: "https://localhost:7143/api/v1/Assets/filter?",
            },
            POST: {
                InsertOne: "https://localhost:7143/api/v1/Assets",
            },
            PUT: {
                UpdateOne: "https://localhost:7143/api/v1/Assets/",
            },
            DELETE: {
                DeleteOne: "",
                DeleteMultiple: ""
            }
        },
        Department: {
            GET: {
                AllDepartment: "https://localhost:7143/api/v1/Departments",
            },
        },
        AssetCategory: {
            GET: {
                AllAssetCategory: "https://localhost:7143/api/v1/AssetCategorys"
            }
        }
    }

}