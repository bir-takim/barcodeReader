import axios from 'axios';
export const POST_BARCODE = "post_barcode";
export const POST_BARCODE_SUCCESS = "post_barcode_success";


export const postingBarcodeNumber = (barkodno) =>{
    console.log("fonksiyonun içindeyim");
    let data = JSON.stringify({barkodno: barkodno})
    return dispatch => {
        dispatch({
            type: POST_BARCODE,
        })
        axios({
            method:'POST',
            url: `https://fesalpg.com/y/fapp/public/api/barkodoku/${barkodno}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result);
            dispatch({
                type: POST_BARCODE_SUCCESS,
                payload: { data: result.data}
            })
        }).catch((err)=>{
        })
    }
}