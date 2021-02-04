defmodule MixyboosApi.MixesTest do
  use MixyboosApi.DataCase

  alias MixyboosApi.Mixes

  describe "mix" do
    alias MixyboosApi.Mixes.Mix

    @valid_attrs %{description: "some description", title: "some title"}
    @update_attrs %{description: "some updated description", title: "some updated title"}
    @invalid_attrs %{description: nil, title: nil}

    def mix_fixture(attrs \\ %{}) do
      {:ok, mix} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Mixes.create_mix()

      mix
    end

    test "list_mix/0 returns all mix" do
      mix = mix_fixture()
      assert Mixes.list_mix() == [mix]
    end

    test "get_mix!/1 returns the mix with given id" do
      mix = mix_fixture()
      assert Mixes.get_mix!(mix.id) == mix
    end

    test "create_mix/1 with valid data creates a mix" do
      assert {:ok, %Mix{} = mix} = Mixes.create_mix(@valid_attrs)
      assert mix.description == "some description"
      assert mix.title == "some title"
    end

    test "create_mix/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Mixes.create_mix(@invalid_attrs)
    end

    test "update_mix/2 with valid data updates the mix" do
      mix = mix_fixture()
      assert {:ok, %Mix{} = mix} = Mixes.update_mix(mix, @update_attrs)
      assert mix.description == "some updated description"
      assert mix.title == "some updated title"
    end

    test "update_mix/2 with invalid data returns error changeset" do
      mix = mix_fixture()
      assert {:error, %Ecto.Changeset{}} = Mixes.update_mix(mix, @invalid_attrs)
      assert mix == Mixes.get_mix!(mix.id)
    end

    test "delete_mix/1 deletes the mix" do
      mix = mix_fixture()
      assert {:ok, %Mix{}} = Mixes.delete_mix(mix)
      assert_raise Ecto.NoResultsError, fn -> Mixes.get_mix!(mix.id) end
    end

    test "change_mix/1 returns a mix changeset" do
      mix = mix_fixture()
      assert %Ecto.Changeset{} = Mixes.change_mix(mix)
    end
  end
end
