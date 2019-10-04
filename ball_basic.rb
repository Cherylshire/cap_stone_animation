grid = [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        ["-", "-", "-", "-", "-"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        ["-", "-", "-", "-", "-"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        ["-", "-", "-", "-", "-"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        ["-", "-", "-", "-", "-"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        ["-", "-", "-", "-", "-"]
        ]

ball = [
        [" ", "0", "0", "0", " "],
        ["0", "O", "O", "O", "0"],
        ["0", "O", "O", "O", "0"],
        [" ", "0", "0", "0", " "]
      ]
      
6.times do 
  16.times do |placement|
  # placement = 0
    deep_dup_grid = grid.map {|row| row.map {|space| space.dup }}
    deep_dup_grid[placement] = ball[0]
    deep_dup_grid[placement + 1] = ball[1]
    deep_dup_grid[placement + 2] = ball[2]
    deep_dup_grid[placement + 3] = ball[3]

    system "clear"

    deep_dup_grid.each do |row|
      puts row.join("")
    end

    sleep(0.2)
  end

  16.times do |placement|
  # placement = 0
    deep_dup_grid = grid.map {|row| row.map {|space| space.dup }}
    deep_dup_grid[18 - (placement + 0)] = ball[0]
    deep_dup_grid[18 - (placement + 1)] = ball[1]
    deep_dup_grid[18 - (placement + 2)] = ball[2]
    deep_dup_grid[18 - (placement + 3)] = ball[3]

    system "clear"
    
    deep_dup_grid.each do |row|
      puts row.join("")
    end

    sleep(0.2)
  end
end