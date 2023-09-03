import { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    const replacements = {
      km_input: data.km,
    };
    window.electron.ipcRenderer.sendMessage('generate-document', replacements);
  };
  return (
    <div>
      <h1>Características da OAE</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="left">
          <div className="input-text-container">
            <span>KM:</span>
            <input type="text" {...register('km')} />
          </div>
          <div className="input-text-container">
            <span>Linha:</span>
            <input type="text" {...register('line')} />
          </div>
          <div className="input-text-container">
            <span>Cidade:</span>
            <input type="text" {...register('city')} />
          </div>
          <div className="input-text-container">
            <span>Estado:</span>
            <input type="text" {...register('state')}/>
          </div>
          <div className="input-number-container">
            <span>Comprimento:</span>
            <input type="number" {...register('length')}/>
          </div>
          <div className="input-number-container">
            <span>Largura:</span>
            <input type="number" {...register('width')}/>
          </div>
          <div className="input-number-container">
            <span>Altura:</span>
            <input type="number" {...register('height')}/>
          </div>
        </div>
        <button type="submit" id="generate-docx">
          GERAR DOCUMENTO
        </button>
      </form>
    </div>
  );
}
