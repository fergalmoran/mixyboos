defmodule MixyboosApiWeb.Schema do
  use Absinthe.Schema
  alias MixyboosApi.Mixes

  object :mix do
    # ID!
    field :id, non_null(:id)
    field :title, non_null(:string)
    field :description, :string
    # field :genres, {:array, :string}
  end

  mutation do
    field :create_mix, non_null(:boolean) do
      arg :title, non_null(:string)
      arg :description, non_null(:string)

      resolve(fn %{title: title, description: description}, _ ->
        case Mixes.create_mix(%{title: title, description: description}) do
          {:ok, %Mixes.Mix{}} ->
            {:ok, true}

          _ ->
            {:ok, false}
        end
      end)
    end
  end

  query do
    field :hello, :string do
      resolve(fn _, _ ->
        {:ok, "Hello world!"}
      end)
    end

    # [MixItem!]!
    field :mixes, non_null(list_of(non_null(:mix))) do
      resolve(fn _, _ ->
        {:ok, Mixes.list_mix()}
      end)
    end
  end
end
