import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContext } from "react";

import "./index.css";
import { CalculateContext } from "../../contexts/calculate";

export const Form = () => {
  const { calculateAnticipation } = useContext(CalculateContext);

  const formSchema = yup.object({
    amount: yup.number().required("Campo Obrigatório"),
    installments: yup.number().required("Campo Obrigatório"),
    mdr: yup.number().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    calculateAnticipation(data);
  };

  return (
    <div className="formContainer">
      <h1>Simule sua antecipação</h1>
      <form className="formSale" onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="Qual o valor da venda?"
          type="amount"
          className="input"
          {...register("amount")}
          name="amount"
          error={errors.amount?.message}
        />

        <input
          placeholder="Em quantas parcelas?"
          type="amount"
          className="input"
          {...register("installments")}
          name="installments"
          error={errors.installments?.message}
        />

        <input
          placeholder="Qual o percentual de MDR?"
          type="amount"
          className="input"
          {...register("mdr")}
          name="mdr"
          error={errors.mdr?.message}
        />

        <button className="submitButton" type="submit">
          SIMULAR
        </button>
      </form>
    </div>
  );
};