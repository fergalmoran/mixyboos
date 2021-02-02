defmodule MixyboosApi.Repo.Migrations.CreateMixes do
  use Ecto.Migration

  def change do
    create table(:mixes, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, :binary_id
      add :title, :string
      add :description, :string
      add :genres, {:array, :string}

      timestamps()
    end

  end
end
