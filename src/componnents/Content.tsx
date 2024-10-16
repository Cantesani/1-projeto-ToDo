import { AddressBook, PlusCircle } from 'phosphor-react'
import styles from './Content.module.css'
import { FormEvent, useState } from 'react';
import { Tarefa } from './Tarefa'
import { ClipboardText } from 'phosphor-react'

export function NewTarefa() {

    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentTex] = useState('')
    const [count, setCountCheckBox] = useState(0);

    function handleCriaTarefa(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentTex('');
    }

    function handleNewCommentChange() {
        setNewCommentTex(event?.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const countComments = () => {
        return comments.length;
    };
    
    const updateCount = (value) => {
        setCountCheckBox(prevCount => prevCount + value);
      };
    return (

        <div>
            <form onSubmit={handleCriaTarefa} className={styles.novaTarefa} >
                <input
                    name="comment"
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newCommentText}
                    onChange={handleNewCommentChange} />
                <button type='submit' >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.bodyTarefas}>
                <div className={styles.header}>
                    <strong>
                        Tarefas Criadas
                        <p className={styles.countCriadas}> {countComments()} </p>
                    </strong>
                    <span>
                        Concluídas
                        <p className={styles.countConcluidas}> {count} </p>
                    </span>
                </div>

                <div className={styles.listTarefas}>
                    <div className={styles.semTarefas}>
                        <ClipboardText size={56} weight="thin" color="#333333" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p> Crie tarefas e organize seus itens a fazer </p>
                    </div>

                    <div className={styles.tarefas} >
                        {comments.map(comment => {
                            return (
                                <Tarefa
                                    key={comment}
                                    content={comment}
                                    onDeleteComment={deleteComment}
                                    updateCount={updateCount}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>





    )
}