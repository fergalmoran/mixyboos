defmodule MixyboosApi.Repo.Migrations.CreateMix do
  use Ecto.Migration

  def change do
    create table(:mix, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :title, :string
      add :description, :string

      timestamps()
    end

  end
end
