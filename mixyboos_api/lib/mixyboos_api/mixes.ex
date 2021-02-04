defmodule MixyboosApi.Mixes do
  @moduledoc """
  The Mixes context.
  """

  import Ecto.Query, warn: false
  alias MixyboosApi.Repo

  alias MixyboosApi.Mixes.Mix

  @doc """
  Returns the list of mix.

  ## Examples

      iex> list_mix()
      [%Mix{}, ...]

  """
  def list_mix do
    Repo.all(Mix)
  end

  @doc """
  Gets a single mix.

  Raises `Ecto.NoResultsError` if the Mix does not exist.

  ## Examples

      iex> get_mix!(123)
      %Mix{}

      iex> get_mix!(456)
      ** (Ecto.NoResultsError)

  """
  def get_mix!(id), do: Repo.get!(Mix, id)

  @doc """
  Creates a mix.

  ## Examples

      iex> create_mix(%{field: value})
      {:ok, %Mix{}}

      iex> create_mix(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_mix(attrs \\ %{}) do
    %Mix{}
    |> Mix.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a mix.

  ## Examples

      iex> update_mix(mix, %{field: new_value})
      {:ok, %Mix{}}

      iex> update_mix(mix, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_mix(%Mix{} = mix, attrs) do
    mix
    |> Mix.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a mix.

  ## Examples

      iex> delete_mix(mix)
      {:ok, %Mix{}}

      iex> delete_mix(mix)
      {:error, %Ecto.Changeset{}}

  """
  def delete_mix(%Mix{} = mix) do
    Repo.delete(mix)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking mix changes.

  ## Examples

      iex> change_mix(mix)
      %Ecto.Changeset{data: %Mix{}}

  """
  def change_mix(%Mix{} = mix, attrs \\ %{}) do
    Mix.changeset(mix, attrs)
  end
end
