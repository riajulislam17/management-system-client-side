import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileUpload = () => {
    const [highlighted, setHighlighted] = useState(false)

    const xlFileToObject = (file) => {
        const myPromise = new Promise(((resolve, reject) => {
            
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (ev) => {
                const bufferArray = ev.target.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const WSName = wb.SheetNames[0];

                const ws = wb.Sheets[WSName];
                const data = XLSX.utils.sheet_to_json(ws);
                console.log(data);
                resolve(data);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        }));

        myPromise.then((data) => {
            console.log(data)
            const url = 'http://localhost:8000/api/users/insert/csv';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ users: JSON.stringify(data)})
            }, [])
                .then(res => res.json())
                .then(data => {
                    if (data.affectedRows) {
                    }
                })
        }).catch((error) => {
            console.warn(error)
            alert('Sorry, Wrong Format file');
        });
    }

    return (
        <div>
            <div onChange={(e) => {
                xlFileToObject(e.target.files[0])
            }} className={highlighted ? "p-3 m-auto border border-success bg-secondary border-2 shadow-lg" :
                "p-3 my-auto text-center shadow"}>
                <div className="fw-bold" style={{ height: '90px', border:'1px dashed'}}
                    onDragEnter={() => {
                        setHighlighted(true);
                    }}
                    onDragLeave={() => {
                        setHighlighted(false);
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        setHighlighted(false);

                        xlFileToObject(e.dataTransfer.files[0]);
                    }}
                ><h1><i className="fas fa-file-csv"></i></h1></div>
            </div>
        </div>
    );
};

export default FileUpload;