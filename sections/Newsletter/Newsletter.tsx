export interface Form {
  placeholderName?: string;
  placeholderEmail?: string;
  buttonText?: string;
}

export interface Props {
  title?: string;
  form?: Form;
}

const DEFAULT_PROPS: Props = {
  title: "Receba ofertas",
  form: {
    placeholderName: "Digite seu name",
    placeholderEmail: "Digite seu email",
    buttonText: "Inscrever",
  }
};

export default function Newsletter(props: Props) {
  const { title, form } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      class={`flex flex-col py-10 lg:pt-5 px-8 gap-5 bg-secondary`}
    >
      <h4 class="text-secondary-content text-center font-bold text-xl lg:text-left container ">
        {title}
      </h4>
      <form action="/" class="flex justify-center flex-col lg:flex-row gap-5 w-full container ">
        <input
          class="input input-bordered h-[64px] py-2 px-5 w-full"
          type="text"
          placeholder={form?.placeholderName}
        />
        <input
          class="input input-bordered h-[64px] py-2 px-5 w-full"
          type="text"
          placeholder={form?.placeholderEmail}
        />
        <button
          class={`btn bg-transparent border-2 border-base-100 text-base-100 h-[64px] w-full lg:max-w-[287px] hover:border-base-100 hover:text-secondary hover:bg-base-100`}
          type="submit"
        >
          {form?.buttonText}
        </button>
      </form>
    </div>
  );
}
