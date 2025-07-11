"use client"
import { useState, useEffect } from "react"
import { MapPin, Users, Calendar, ExternalLink, GitBranch, Star } from "lucide-react"
import Image from "next/image"

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  blog: string
  location: string
  email: string | null
  bio: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  watchers_count: number
  forks_count: number
  updated_at: string
}

export function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "repositories">("overview")

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch user data
        const userResponse = await fetch("https://api.github.com/users/pratoosh-18")
        if (!userResponse.ok) throw new Error("Failed to fetch user data")
        const userData = await userResponse.json()
        setUser(userData)

        // Fetch repositories
        const reposResponse = await fetch("https://api.github.com/users/pratoosh-18/repos?sort=updated&per_page=6")
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories")
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })
  }

  const formatUpdateDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      HTML: "#e34c26",
      CSS: "#1572B6",
      React: "#61dafb",
      Vue: "#4FC08D",
      PHP: "#777bb4",
      C: "#555555",
      "C++": "#f34b7d",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#fa7343",
      Kotlin: "#A97BFF",
    }
    return colors[language || ""] || "#8b949e"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full" style={{ backgroundColor: "#0d1117" }}>
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading GitHub profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full" style={{ backgroundColor: "#0d1117" }}>
        <div className="text-center text-white">
          <p className="text-red-400 mb-2">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="flex h-full text-white" style={{ backgroundColor: "#0d1117" }}>
      {/* Left Sidebar - Profile Info */}
      <div className="w-80 border-r border-gray-700 p-6 overflow-y-auto" style={{ backgroundColor: "#0d1117" }}>
        <div className="text-center mb-6">
          <Image 
            height={20} width={20}
            src={user.avatar_url || "/placeholder.svg"}
            alt={user.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-600"
          />
          <h1 className="text-2xl font-bold text-white mb-1">{user.name}</h1>
          <p className="text-xl text-gray-400 mb-2">{user.login}</p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>

        {user.bio && (
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">{user.bio}</p>
          </div>
        )}

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-sm">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-white font-medium">{user.followers}</span>
            <span className="text-gray-400">followers</span>
            <span className="text-gray-600">·</span>
            <span className="text-white font-medium">{user.following}</span>
            <span className="text-gray-400">following</span>
          </div>

          {user.location && (
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">{user.location}</span>
            </div>
          )}

          <div className="flex items-center space-x-3 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Joined {formatDate(user.created_at)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-2xl font-bold text-white">{user.public_repos}</div>
            <div className="text-xs text-gray-400">Repositories</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-2xl font-bold text-white">{user.public_gists}</div>
            <div className="text-xs text-gray-400">Gists</div>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="border-b border-gray-700 px-6 pt-4" style={{ backgroundColor: "#0d1117" }}>
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 px-1 border-b-2 text-sm font-medium transition-colors ${
                activeTab === "overview"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("repositories")}
              className={`pb-3 px-1 border-b-2 text-sm font-medium transition-colors ${
                activeTab === "repositories"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Repositories
              <span className="ml-1 bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">
                {user.public_repos}
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: "#0d1117" }}>
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Popular repositories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {repos.slice(0, 6).map((repo) => (
                    <div
                      key={repo.id}
                      className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
                      style={{ backgroundColor: "#161b22" }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center space-x-1 truncate"
                        >
                          <span className="truncate">{repo.name}</span>
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                      </div>

                      {repo.description && (
                        <p className="text-gray-400 text-xs mb-3 line-clamp-2">{repo.description}</p>
                      )}

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-3 min-w-0">
                          {repo.language && (
                            <div className="flex items-center space-x-1 flex-shrink-0">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                              ></div>
                              <span className="text-gray-400 truncate">{repo.language}</span>
                            </div>
                          )}

                          <div className="flex items-center space-x-1 text-gray-400 flex-shrink-0">
                            <Star className="w-3 h-3" />
                            <span>{repo.stargazers_count}</span>
                          </div>

                          <div className="flex items-center space-x-1 text-gray-400 flex-shrink-0">
                            <GitBranch className="w-3 h-3" />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>

                        <span className="text-gray-500 text-xs flex-shrink-0 ml-2">
                          {formatUpdateDate(repo.updated_at)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "repositories" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Repositories</h2>
                <a
                  href={`${user.html_url}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
                >
                  <span>View all repositories</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-3">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
                    style={{ backgroundColor: "#161b22" }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1"
                      >
                        <span>{repo.name}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitBranch className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    {repo.description && <p className="text-gray-400 text-sm mb-3">{repo.description}</p>}

                    <div className="flex items-center justify-between text-sm">
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          ></div>
                          <span className="text-gray-400">{repo.language}</span>
                        </div>
                      )}

                      <span className="text-gray-500">Updated on {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
