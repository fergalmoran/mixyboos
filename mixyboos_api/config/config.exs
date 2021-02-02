# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :mixyboos_api,
  ecto_repos: [MixyboosApi.Repo],
  generators: [binary_id: true]

# Configures the endpoint
config :mixyboos_api, MixyboosApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "VFdoTTb6x2Eu96La+B+QuCmtXFRHsGNlL1q0gf2THhPpbAV3x3QotXfS9V1NjhaP",
  render_errors: [view: MixyboosApiWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: MixyboosApi.PubSub,
  live_view: [signing_salt: "dKlbKssj"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
