import { useState } from 'react';
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import './styles.css';
import { Input } from 'renderer/components/Input';

export function Home() {

  interface FirstFormData {
    km: string;
    line: string;
    city: string;
    state: string;
    length: number;
    height: number;
    width: number;
    hold: string;
    gauge: string;
    fastening: string;
    [key: string]: string | number;
  }


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FirstFormData>();



  const onSubmit: SubmitHandler<FirstFormData> = (data) => {
    const replacements: Record<string, string | number> = {};
    console.log(data)
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        replacements[`${key}_input`] = data[key];
      }
    }
    console.log(replacements);
    // window.electron.ipcRenderer.sendMessage('generate-document', replacements);
  };
  return (
    <div>
      <h1>Características da OAE</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="left">
          <div className="input-text-container">
            <span>KM:</span>
            <Input type="text" name="km" register={register} />
          </div>
          <div className="input-text-container">
            <span>Linha:</span>
            <Input type="text" name="line" register={register}/>
          </div>
          <div className="input-text-container">
            <span>Cidade:</span>
            <Input type="text" name="city" register={register}/>
          </div>
          <div className="input-text-container">
            <span>Estado:</span>
            <Input type="text" name="state" register={register} />
          </div>
          <div className="input-number-container">
            <span>Comprimento:</span>
            <Input type="number" name="length" register={register} />
          </div>
          <div className="input-number-container">
            <span>Largura:</span>
            <Input type="number" name="width" register={register} />
          </div>
          <div className="input-number-container">
            <span>Altura:</span>
            <Input type="number" name='height' register={register} />
          </div>
          <div>
            <span>Bitola:</span>
            <Input type="radio" name='gauge' value="larga" register={register} /><label>Larga</label>
            <Input type="radio" name='gauge' value="tangente" register={register} /><label>Tangente</label>
          </div>
          <div>
            <span>Fixação:</span>
            <Input type="radio" name='fastening' value="pandrol" register={register} /><label>Pandrol</label>
            <Input type="radio" name='fastening' value="deenick" register={register} /><label>Deenick</label>
            <Input type="radio" name='fastening' value="direta" register={register} /><label>Direta</label>
          </div>
        </div>
        <button type="submit" id="generate-docx">
          GERAR DOCUMENTO
        </button>
      </form>
    </div>
  );
}
