defmodule MixyboosApi.Mix do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "mixes" do
    belongs_to :user, MixyboosApi.User

    field :description, :string
    field :genres, {:array, :string}
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(mix, attrs) do
    mix
    |> cast(attrs, [:title, :description, :genres])
    |> validate_required([:title, :description, :genres])
  end
end
