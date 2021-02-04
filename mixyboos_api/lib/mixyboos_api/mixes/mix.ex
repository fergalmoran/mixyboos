defmodule MixyboosApi.Mixes.Mix do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "mix" do
    field :description, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(mix, attrs) do
    mix
    |> cast(attrs, [:title, :description])
    |> validate_required([:title, :description])
  end
end
