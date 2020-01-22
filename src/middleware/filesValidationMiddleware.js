import { displayFileErrors } from "../redux/errors/errors.actions"

// https://www.thegreatcodeadventure.com/form-validation-in-react-with-redux-middleware/

const filesValidationMiddleware = ({dispatch, getState}) => next => action => {
    if(action.type !== "VALIDATE_FILES") {
        return next(action)
    }
    console.log(action)
    console.log('in validation')
    const errors = {
        files: {},
    };
    const fileTypes = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "zip",
    ];
    // let totalFilesSize = null;
    // for (let file of files) {
    //     totalFilesSize += file.size;
    //     if (
    //         !fileTypes.includes(file.name.substring(file.name.lastIndexOf(".") + 1))
    //     ) {
    //         errors.files.type = "Не поддерживаемый тип файла";
    //     } else if (file.size > 5242880) {
    //         errors.files.size = "Размер одного файла не должен превышать 5МБ";
    //     }
    // }
    // if (totalFilesSize > 20971520) {
    //     errors.files.size = "Общий размер файлов не должен превышать 20МБ";
    // }

    // displayFileErrors(errors);
    // if (!Object.keys(errors.files).length) {
    //     this.prepareFiles(files);
    // }

    next(action)
}

export default filesValidationMiddleware


// prepareFiles = files => {
//     const { addFiles } = this.props;
//     const fileData = [];

//     for (let file of files) {
//         const fileInfo = {};
//         fileInfo.name = file.name;
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             fileInfo.content = reader.result;
//         };

//         fileInfo.encoding = "base64";
//         fileData.push(fileInfo);
//     }
//     addFiles(fileData);
// };