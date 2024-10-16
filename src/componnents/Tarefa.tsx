import { Trash } from 'phosphor-react'
import styles from './Tarefa.module.css'
import React, { useRef } from 'react';

export function Tarefa({ content, onDeleteComment, updateCount }) {

    const divRef = useRef(null);

    function handleDeleteComment() {
        if (divRef.current) {
            var idComment = divRef.current.getAttribute("id")
            const checkbox = document.getElementById(idComment); // Isso irá imprimir o id da div no console
            if(checkbox.checked)
            {
                updateCount(-1)
            }
        }
        onDeleteComment(content)
    }

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            updateCount(1); // Incrementa o contador
        } else {
            updateCount(-1); // Decrementa o contador
        }
    };

    return (
        <div className={styles.Tarefa}>
            <input
                type="checkbox"
                onChange={handleCheckboxChange}
                id={content}
                ref={divRef}
            />
            <div>
                <p>{content}</p>
            </div>
            <div className={styles.Trash} onClick={handleDeleteComment}>
                <Trash size={16} />
            </div >
        </div>
    )
}